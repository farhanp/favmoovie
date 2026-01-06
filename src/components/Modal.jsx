import { X } from "lucide-react";
import Loader from "./Loader";
import MovieDetails from "./MovieDetails";

const Modal = ({ dialogRef, loading, onOpen, children }) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={onOpen}>
        More Info
      </button>
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box p-0 relative flex justify-center flex-col min-h-45">
          {loading ? (
            <Loader />
          ) : (
            <>
              <X
                onClick={() => dialogRef.current.close()}
                color="white"
                className="absolute z-20 m-1 font-extrabold cursor-pointer right-0 top-0"
              />
              {children}
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          {/* if there is a button in form, it will close the modal */}
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
