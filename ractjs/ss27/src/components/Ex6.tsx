export default function Ex6() {
    const user = {
        firstName: "Trịnh Khắc", lastName: "Hung"
    };
    const formatName = (e: {}) => {
        return user.firstName + ' ' + user.lastName
    }
    return (
        <>
            <p>{formatName(user)}</p>
        </>
    )
}
