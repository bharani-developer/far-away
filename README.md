# 🧳 Simple Trip Packing List App React App

![FARAWAY](https://github.com/bharani-developer/far-away/blob/main/public/far-away.png)
# Trip Packing List App

This is a simple React application that allows you to manage a packing list for a trip. You can add items, mark them as packed, sort them by status or description, and view the overall progress of your packing.

## Features

- Add items to the packing list
- Check items as packed/unpacked
- Sort items by status (packed/unpacked) and description
- Display total items and the number of packed items with percentage progress

## Demo

![App Demo](https://github.com/bharani-developer/far-away/blob/main/public/far-away.png)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/bharani-developer/far-away.git
    cd trip-packing-list
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## Usage

1. **Add an item:**
    - Enter the description of the item in the input field.
    - Click the "Add Item" button.

2. **Check/Uncheck an item:**
    - Click the checkbox next to the item description to mark it as packed/unpacked.

3. **Sort items:**
    - Use the sort options to arrange items by status or description.

4. **View progress:**
    - The app displays the total number of items and the number of packed items along with the percentage of items packed.

## Code Structure

- **`src/App.js`:** Main component that holds the state and renders the list.
- **`src/components/ItemList.js`:** Component to display the list of items.
- **`src/components/Item.js`:** Component to display a single item.
- **`src/components/Progress.js`:** Component to display progress of packing.

## Components

### `App.js`

This is the main component where the state is managed. It includes functions to add items, toggle their packed status, and sort items.

### `ItemList.js`

This component takes a list of items as a prop and renders them. It also handles sorting.

### `Item.js`

This component represents a single item in the list. It includes a checkbox to mark the item as packed or unpacked.

### `Progress.js`

This component displays the total number of items, the number of packed items, and the percentage of items packed.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
