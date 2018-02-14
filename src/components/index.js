import styledComponents from 'styled-components'

export const Container = styledComponents.div`
  margin: 50px auto;
  width: 300px;
`

export const Input = styledComponents.input`
  width: 100%;
  border: 2px solid #3498db;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;

  &:focus {
    border: 2px solid #2980b9;
    outline: 0;
  }
`

export const Button = styledComponents.button`
  width: 100%;
  display: block;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  background: #3498db;
  border: 0;
  font-size: 16px;
  color: #fff;
  transition: all .25s;

  &:hover {
    cursor: pointer;
    background: #2980b9;
  }

  &:focus {
    outline: 0;
  }
`
