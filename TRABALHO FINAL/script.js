/* styles.css */

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  width: 90%;
}

h1 {
  text-align: center;
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
}

.image-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
}

.sidebar1, .sidebar2, .result{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
}

.sidebar1, .sidebar2, .button-column, .result {
  margin-bottom: 20px;
}

.result{
  margin-top: 30px;
}

h2 {
  font-size: 25px;
  color: #333;
}

.box {
  width: 250px;
  height: 250px;
  background-color: #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center;
}

.button {
  display: inline-block;
  max-width: 200px;
  background-color: #b13cff;
  color: white;
  padding: 10px 20px;
  text-align: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 15px;
}

.button:hover {
  background-color: #616161;
}

.button-column {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.button-column .button {
  flex: 1 1 calc(33% - 20px);
  margin: 5px;
}

@media (max-width: 768px) {
  .button-column .button {
      flex: 1 1 calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .button-column .button {
      flex: 1 1 100%;
  }

  h1 {
      font-size: 24px;
  }

  h2 {
      font-size: 20px;
  }

  .box {
      height: 150px;
  }
}

.box-result {
  width: 250px;
  height: 250px;
  background-color: #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center;
}

.save {
  display: block;
}
