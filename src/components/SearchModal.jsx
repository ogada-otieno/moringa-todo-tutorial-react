import React from "react";

const SearchModal = ({
  searchQuery,
  handleSearch,
  searchResults,
  closeModal,
}) => {
  return (
    <dialog id="search_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Search Todos</h3>
        <input
          type="text"
          placeholder="Search by title or description"
          value={searchQuery}
          onChange={handleSearch}
          className="input input-bordered w-full mt-4 mb-4"
        />
        <div>
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((todo) => (
                <li key={todo.id} className="mb-2">
                  <div className="card bg-base-100 shadow-lg p-5">
                    <h4 className="font-bold">{todo.title}</h4>
                    <p>{todo.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found</p>
          )}
        </div>
        <div className="modal-action">
          <button className="btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default SearchModal;
