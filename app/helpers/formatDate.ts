export const formatDate = (date: string) => {
    const dateWrapper = new Date(date)
  
    const year = dateWrapper.getFullYear()
    const month = String(dateWrapper.getMonth() + 1).padStart(2, '0')
    const day = String(dateWrapper.getDate()).padStart(2, '0')
    const hours = String(dateWrapper.getHours()).padStart(2, '0')
    const minutes = String(dateWrapper.getMinutes()).padStart(2, '0')
  
    return `${year}-${month}-${day} (${hours}:${minutes})`
  }