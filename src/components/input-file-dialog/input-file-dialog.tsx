export interface InputFileDialog {
    onChange: (event: any) => void;
}
export const InputFileDialog = ({ onChange }: InputFileDialog) => {
    return <input type="file" onChange={onChange} name="image"></input>;
};
