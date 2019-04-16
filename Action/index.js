export * from './StoreDetailAction'
export * from './SearchProductAction'

//Delete existing product
export const deleteItemAction = (deleteProductId) => {
    return {
        type: DELETE_PRODUCT,
        deleteProductId
    }
}
//Action sent by Redux-saga
export const deleteItemSuccessAction = (deleteProductId) => {
    return {
        type: DELETE_SUCCEEDDED,
        deleteProduct
    }
}