type SnackProps = {
    message:string | null | undefined;
    color: string;  
}

export const SnackBar = ({ message, color }: SnackProps) => {

    return <div className="snack" style={{backgroundColor:color}}>{message}</div>;   
        
};
