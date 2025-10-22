export default function Message({ count }) {
    let message = "start clicking to see your score";
    
    if (count > 0 && count <= 5) {
        message = "Good start!";
    } else if (count > 5 && count <= 10) {
        message = "Keep going!";
    } else if (count > 10) {
        message = "You're on fire!";
    }
    
    return <div>{message}</div>;
}