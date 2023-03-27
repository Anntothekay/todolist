import { FormEvent, useState } from "react";

interface Props {
  onSave: (newTodo: string) => void;
}

const InputForm = ({ onSave }: Props) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSave(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <label htmlFor="description" className="form-label">
        Add New Todo:
      </label>
      <input
        value={newTodo}
        onChange={(event) =>
          setNewTodo((event.target as HTMLInputElement).value)
        }
        id="description"
        type="text"
        minLength={3}
        required
        className="form-control mb-2"
      />
      <button className="btn btn-primary">Save</button>
    </form>
  );
};

export default InputForm;
