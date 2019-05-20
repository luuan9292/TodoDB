import React, { Component } from 'react';

class FormItem extends Component {

    handleCheckComplete = () => {
        this.props.handleCheckComplete(this.props.item);
    }

    handleDelete = () => {
        this.props.handleDelete(this.props.index)
    }

    handleImportant = () => {
        this.props.handleImportant(this.props.item);
    }

    render() {
        let { item } = this.props;
        // Add cac class tuong ung khi kich hoat
        let classInput = "round";
        let classtr = "form__item";
        if (item.isComplete === true) {
            classInput += " round__done";
            classtr += " completed";
        }
        if (item.isImportant === true) {
            classtr += ' important'
        }

        return (
            <tr className={classtr}>
                <td>
                    <div className={classInput}>
                        <input id={item.id} name='checkStatus' type="checkbox" onChange={this.handleCheckComplete} checked={item.isComplete ? 'checked' : ''} />
                        <label htmlFor={item.id} />
                        <span>{item.name}</span>
                        <div className="delete__important">
                            <div onClick={this.handleImportant} className='important__button'>{item.isImportant ? <i className="fas fa-star active_star"></i> : <i className="far fa-star"></i>}</div>
                            <div onClick={this.handleDelete} className='delete__button'><i className="fa fa-times-circle"></i></div>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default FormItem;