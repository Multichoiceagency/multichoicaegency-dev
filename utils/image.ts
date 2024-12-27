export function getSupportedImageUrl(url: string | undefined): string {
    if (!url) return '/placeholder.jpg';
    
    // Check if URL already has an image extension
    if (/\.(jpg|jpeg|png|webp|avif)$/i.test(url)) {
      return url;
    }
  
    // Try different formats in order of preference
    const formats = ['avif', 'webp', 'jpg', 'jpeg', 'png'];
    const baseUrl = url.split('?')[0]; // Remove any existing query parameters
    
    // Return URL with format that exists
    return `${baseUrl}`;
  }
  
  