export const formatPostTime = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const timeDifference = now - createdDate;
  
    // Convert time difference to seconds
    const seconds = Math.floor(timeDifference / 1000);
  
    if (seconds < 60) {
      return `${seconds === 1 ? '1s' : `${seconds}s`} ago`;
    }
  
    // Convert time difference to minutes
    const minutes = Math.floor(seconds / 60);
  
    if (minutes < 60) {
      return `${minutes === 1 ? '1m' : `${minutes}m`} ago`;
    }
  
    // Convert time difference to hours
    const hours = Math.floor(minutes / 60);
  
    if (hours < 24) {
      return `${hours === 1 ? '1hr' : `${hours}hrs`} ago`;
    }
  
    // Convert time difference to days
    const days = Math.floor(hours / 24);
  
    if (days < 7) {
      return `${days === 1 ? '1 day' : `${days} days`} ago`;
    }
  
    // For longer periods, you may want to use a different format or show the actual date
    return createdDate.toLocaleDateString(); 
  }
  