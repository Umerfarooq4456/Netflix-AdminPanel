const ErrorToaster = (toast, message) => {

toast({
    title: 'Error',
    description: message || 'an error occured',
    status: 'error',
    position: 'top-right',
    duration: 2000,
    isClosable: true,
    variant:'left-accent'
})
}

export default ErrorToaster