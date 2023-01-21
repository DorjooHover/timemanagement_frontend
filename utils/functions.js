export const ChangeCurrency = (txt) => {
    txt = parseInt(txt)
    return txt.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export const CapitalizeFirstTxt = (txt) => {
    return txt[0].toUpperCase() + txt.slice(1)
}