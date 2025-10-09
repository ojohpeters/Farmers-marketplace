// Helper function to convert Unsplash URLs to proper format
export function convertUnsplashUrl(url: string): string {
  // If it's already a proper image URL, return as is
  if (url.includes('images.unsplash.com') || url.includes('plus.unsplash.com')) {
    return url
  }
  
  // Convert unsplash.com/photos/... to images.unsplash.com/...
  if (url.includes('unsplash.com/photos/')) {
    const photoId = url.split('/photos/')[1].split('?')[0]
    return `https://images.unsplash.com/photo-${photoId}?w=400&h=300&fit=crop&auto=format`
  }
  
  return url
}

// Helper function to validate and suggest proper image URLs
export function validateImageUrl(url: string): { isValid: boolean; suggestion?: string } {
  const supportedDomains = [
    'images.unsplash.com',
    'plus.unsplash.com', 
    'unsplash.com',
    'via.placeholder.com',
    'picsum.photos',
    'i.ibb.co'
  ]
  
  // Check if URL is from a supported domain
  const isSupported = supportedDomains.some(domain => url.includes(domain))
  
  if (!isSupported) {
    return {
      isValid: false,
      suggestion: 'Use images from Unsplash, Placeholder, or ImgBB'
    }
  }
  
  // Convert unsplash.com URLs to proper format
  if (url.includes('unsplash.com/photos/')) {
    return {
      isValid: true,
      suggestion: convertUnsplashUrl(url)
    }
  }
  
  return { isValid: true }
}

