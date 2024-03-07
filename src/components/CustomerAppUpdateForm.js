import React from 'react';
export default function CustomerAppUpdateForm (props) {
    return (
        <div className="boxed">
        <div>
        <h4>{props.mode}</h4>
      </div>
      <form >
        <table id="customer-add-update" >
          <tbody>
            <tr>
              <td className={'label'} >Name:</td>
              <td><input
                type="text"
                name="name"
                onChange={(e) => props.handleInputChange(e)}
                value={props.formObject.name}
                placeholder="Customer Name"
                required /></td>
            </tr>
            <tr>
              <td className={'label'} >Email:</td>
              <td><input
                type="email"
                name="email"
                onChange={(e) => props.handleInputChange(e)}
                value={props.formObject.email}
                placeholder="name@company.com" /></td>
            </tr>
            <tr>
              <td className={'label'} >Pass:</td>
              <td><input
                type="text"
                name="password"
                onChange={(e) => props.handleInputChange(e)}
                value={props.formObject.password}
                placeholder="password" /></td>
            </tr>
            <tr className="button-bar">
              <td colSpan="2">
                <input type="button" value="Delete" onClick={props.onDeleteClick} />
                <input type="button" value="Save" onClick={props.onSaveClick} />
                <input type="button" value="Cancel" onClick={props.onCancelClick} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      </div>
      );
}