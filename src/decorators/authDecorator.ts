export function Auth(role?: string) {
    // First define your requisites for use your endpoint, so for example
    // if we want an endpoint only accessible for admins, we need to call our decorator
    // like this: @Auth("admin")
    return (
        target: object,
        propertyName: string,
        propertyDesciptor: PropertyDescriptor): PropertyDescriptor => {
        const method = propertyDesciptor.value;

        propertyDesciptor.value = async function(...args: any[]) {

            // Here we create the logic of our decorator and we manage when the user
            // can access to our endpoint or when we need to return a http code 401.
            // In args we have an array with the parameters received by our endpoint
            // and returning method.apply will execute our endpoint.
            return method.apply(this, args);
        };
        return propertyDesciptor;
    };
}
