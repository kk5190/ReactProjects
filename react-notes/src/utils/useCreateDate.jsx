const useCreateDate = () => {
  const dateObj = new Date()
  const year = dateObj.getFullYear()
  const monthIndex = dateObj.getMonth()
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const day = dateObj.getDate()
  const hours = dateObj.getHours()
  const minutes = dateObj.getMinutes()


  return `${monthNames[monthIndex]} ${day}, ${year} [${hours}:${minutes}]`
}

export default useCreateDate