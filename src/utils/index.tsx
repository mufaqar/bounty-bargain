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


