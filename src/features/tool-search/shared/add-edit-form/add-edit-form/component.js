import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap/lib'

import { Types, Locations } from '../../../../shared/constants'
import ErrorShowComponent from '../error-show'

const AddUpdateFormComponent = (props) => {
    const { name, typeTool, location } = props
    const { handleSave, handleCancel, handleChangeName, handleChangeType, handleChangeLocation } = props
    const { nameError, typeToolError, locationError, formValid } = props
    return (
        <form onSubmit={handleSave}>
            <FormGroup>
                <ControlLabel>Name:</ControlLabel>
                <FormControl
                    name = "tool_name" 
                    onChange = {handleChangeName} 
                    value = {name}
                    type="text" 
                    placeholder="Name..."
                />
                { nameError !== '' ? <ErrorShowComponent errorMessage = {nameError}/> : ''}
            </FormGroup>
            <FormGroup>
                <ControlLabel>Type:</ControlLabel>
                <FormControl name = "tool_type" value = {typeTool} onChange = { handleChangeType } componentClass = "select">
                    <option hidden>Type...</option>
                    <option value = {Types.DRILL_TYPE}>Drill</option>
                    <option value = {Types.CUT_TYPE}>Cut</option>
                    <option value = {Types.MILL_TYPE}>Mill</option>
                </FormControl>
                { typeToolError !== '' ? <ErrorShowComponent errorMessage = {typeToolError}/> : ''}
            </FormGroup>
            <FormGroup>
                <ControlLabel>Location:</ControlLabel>
                <FormControl 
                    name="tool_location" 
                    value = {location} 
                    onChange = { handleChangeLocation } 
                    componentClass = "select" > 
                    <option hidden>Location...</option>
                    <option value = {Locations.BOX_A}>Box-A</option>
                    <option value = {Locations.BOX_B}>Box-B</option>
                    <option value = {Locations.BOX_C}>Box-C</option>
                </FormControl>
                { locationError !== '' ? <ErrorShowComponent errorMessage = {locationError}/> : ''}
            </FormGroup>
            <FormGroup>
                <Button type="submit" bsStyle="primary" disabled={!formValid}>
                    Save
                </Button>
                <Button type = "reset" bsStyle="primary"
                    onClick={handleCancel}>
                        Cancel
                </Button>
            </FormGroup>
        </form>
    )
}

AddUpdateFormComponent.propTypes = {
    name: PropTypes.string.isRequired,
    typeTool: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    handleChangeName: PropTypes.func.isRequired,
    handleChangeType: PropTypes.func.isRequired,
    handleChangeLocation: PropTypes.func.isRequired
}

export default AddUpdateFormComponent