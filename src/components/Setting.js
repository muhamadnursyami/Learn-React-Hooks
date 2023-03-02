import { useAppContext } from "../context.js/app-reducer";

export default function Setting() {
  // Kita langsung pangil function useAppContext karena disitu sudah terdapat useContext(AppContext;
  const [state, dispatch] = useAppContext();
  return (
    <div>
      <input
        type="text"
        value={state.user.name ?? ""}
        placeholder="Enter your name"
        onChange={(e) => {
          // Menggunakan State management function, akses contextnya. kemudia didalam context
          // kita ambil setUser dari UseState app, kita bisa menggunakan karena kita menggunakan api Context
          // kemudian kita harus copy/  clone isi context.user, didalam context terdapat user dan function setUser();
          // kemudian kita inisialisasi name, di user, kita ganti dengan e.target.value
          dispatch({
            type: "updateUser",
            payload: {
              ...state.user,
              name: e.target.value,
            },
          });
        }}
      />
    </div>
  );
}
