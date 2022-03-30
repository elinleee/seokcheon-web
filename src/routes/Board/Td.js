import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";


const Td = ({ item, handleRemove, handleEdit }) => {
    const onRemove = () => {
        handleRemove(item.id)
    }

    const onEdit = () => {
        handleEdit(item);
    }

    return (
        <>
            <tr className="bh-white border-2 border-gray-200">
                <td className="px-4 py-3">{item.id}</td>
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.email}</td>
                <td className="px-4 py-3">{item.phone}</td>
                <td className="px-4 py-3">{item.website}</td>
                <td onClick={onEdit} className="text-center text-purple-400 cursor-pointer show-modal">
                    <FaEdit />
                </td>
                <td onClick={onRemove} className="text-center text-purple-400 cursor-pointer">
                    <FaTrashAlt />
                    {/* <i className="far fa-trash-alt"></i> */}
                </td>
            </tr>
        </>
    )
}

export default Td;