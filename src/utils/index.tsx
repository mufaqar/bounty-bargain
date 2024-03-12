export const modelboxStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        borderRadius: '15px'
    },
};

// generate rendom password 
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*+!?0123456789';
export function generatePassword(length: number) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export const NewlyAddedCoupon = (date: any) => {
    var currentDate = new Date(date);
    // Add 3 days to the current date
    currentDate.setDate(currentDate.getDate() + 3);
    // Format the new date as a string in the same format
    var newDate = currentDate.toISOString();
    var currentDate = new Date();

    var newDateObject = new Date(newDate);
    if (newDateObject > currentDate) {
        return true
    } else {
        return false
    }
}


export function GetCurrentDateInISOFormat() {
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);
    const seconds = ('0' + now.getSeconds()).slice(-2);

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}




export const blogDateFormate = (givenDate: any) => {
    const dateObj = new Date(givenDate);
    const formattedDate = `${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getDate().toString().padStart(2, '0')}/${dateObj.getFullYear()}, ${dateObj.getHours()}:${dateObj.getMinutes().toString().padStart(2, '0')} ${dateObj.getHours() >= 12 ? 'PM' : 'AM'}`;
    return formattedDate
}
