function AddItemForm() {

  return (

    <div>
      <h2>form</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          required
          type="text"
          // id="name"
          // value="name"
        />
        <label htmlFor="ingredients">Ingredients:</label>
        <input
          required
          type="text-area"
          // id="ingredients"
          // value={ingredients}
        />
        <label htmlFor="gluten">Has Gluten? True or False:</label>
        <input
          required
          type="text"
          // id="gluten"
          // value={gluten}
        />
        <button type="submit">Add new menu item</button>
      </form>
    </div>
  );
}
export default AddItemForm;