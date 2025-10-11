'use client'

import { useState, useRef } from 'react'
import { Button } from './button'
import { Input } from './input'
import { Label } from './label'
import { Upload, X, Image as ImageIcon, Link, AlertCircle } from 'lucide-react'
import Image from 'next/image'
import { convertUnsplashUrl } from '@/lib/imageUtils'

interface ImageUploadProps {
  value: string
  onChange: (url: string) => void
  placeholder?: string
  className?: string
}

export function ImageUpload({ value, onChange, placeholder, className }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadMode, setUploadMode] = useState<'url' | 'upload'>('url')
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setError(null)
    setIsUploading(true)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        onChange(data.data.url)
        setPreview(data.data.url)
        setUploadMode('url') // Switch to URL mode after successful upload
      } else {
        setError(data.error || 'Upload failed')
      }
    } catch (error) {
      console.error('Upload error:', error)
      setError('Failed to upload image')
    } finally {
      setIsUploading(false)
    }
  }

  const handleUrlChange = (url: string) => {
    setError(null)
    
    // Auto-convert Unsplash URLs
    let processedUrl = url
    if (url.includes('unsplash.com/photos/')) {
      processedUrl = convertUnsplashUrl(url)
    }
    
    onChange(processedUrl)
    setPreview(processedUrl)
  }

  const clearImage = () => {
    onChange('')
    setPreview(null)
    setError(null)
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Mode Toggle */}
      <div className="flex space-x-2">
        <Button
          type="button"
          variant={uploadMode === 'url' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setUploadMode('url')}
          className="flex items-center space-x-2"
        >
          <Link className="w-4 h-4" />
          <span>URL</span>
        </Button>
        <Button
          type="button"
          variant={uploadMode === 'upload' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setUploadMode('upload')}
          className="flex items-center space-x-2"
        >
          <Upload className="w-4 h-4" />
          <span>Upload</span>
        </Button>
      </div>

      {/* Upload Mode */}
      {uploadMode === 'upload' && (
        <div className="space-y-2">
          <Label>Upload Image</Label>
          <div className="flex items-center space-x-2">
            <Input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              disabled={isUploading}
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="flex items-center space-x-2"
            >
              {isUploading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
                  <span>Uploading...</span>
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  <span>Choose File</span>
                </>
              )}
            </Button>
          </div>
          <p className="text-xs text-gray-500">
            Supported formats: JPEG, PNG, WebP, GIF (Max 5MB)
          </p>
        </div>
      )}

      {/* URL Mode */}
      {uploadMode === 'url' && (
        <div className="space-y-2">
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            name="image"
            value={value}
            onChange={(e) => handleUrlChange(e.target.value)}
            placeholder={placeholder || "https://images.unsplash.com/photo-..."}
            className="w-full"
          />
          <div className="text-xs text-gray-500 space-y-1">
            <p><strong>Supported formats:</strong></p>
            <p>• <code>https://images.unsplash.com/photo-...</code></p>
            <p>• <code>https://unsplash.com/photos/...</code> (auto-converts)</p>
            <p>• <code>https://via.placeholder.com/300x200</code></p>
            <p>• <code>https://picsum.photos/400/300</code></p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="flex items-center space-x-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}

      {/* Preview */}
      {(preview || value) && (
        <div className="relative">
          <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={preview || value}
              alt="Preview"
              fill
              className="object-cover"
              onError={() => setError('Failed to load image')}
            />
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={clearImage}
              className="absolute top-2 right-2"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Current image: {value}
          </p>
        </div>
      )}
    </div>
  )
}
