
const SuccessToaster = (toast, message) => {
    toast({
        title: 'Success',
        description: message || 'Success',
        status: 'success',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
    })
}

export default SuccessToaster
