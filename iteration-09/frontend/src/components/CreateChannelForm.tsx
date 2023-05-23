import { FormEvent, useState } from "react";

interface ChannelCreateFormProps {
    onSubmit: (channelName: string, channelDescription: string) => void;
  }

function CreateChannelForm({ onSubmit }: ChannelCreateFormProps) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSubmit(name, description);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Channel name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>Channel description
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <input type="submit">Create</input>
        </form>
    )
}

export default CreateChannelForm;