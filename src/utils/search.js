export const searchIt = (data,input)=>{
    const filterData = data.filter((item)=>{
        return item.name.toLowerCase().includes(input.toLowerCase())
    })
    return filterData
}