type SnackProps = {
    message:string | null | undefined;
    color: string;  
}

export const SnackBar = ({ message, color }: SnackProps) => {

   //react hooks set interval show and hide

    return <div className="snack-bar" style={{backgroundColor:color}}>
        {message === "Loading" ? <div><svg className="snack-bar__spinner" viewBox="0 0 50 50">
                <circle className="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>{message}</div> : message}
    </div>;
        
};
