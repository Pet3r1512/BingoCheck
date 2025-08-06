function useGetTodayDate() {
    const today = new Date()
    const year = today.getFullYear()
    let month = (today.getMonth() + 1).toString()
    let day = today.getDate().toString()

    if (day.length < 2) {
        day = "0" + day.toString()
    }

    if (month.length < 2) {
        month = "0" + month.toString()
    }

    return day + "/" + month + "/" + year
}

export default useGetTodayDate