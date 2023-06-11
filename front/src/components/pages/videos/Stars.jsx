import React from "react";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";


export function Stars(number) {
    let num = number.number/2;
    console.log(num)
    if (1 > num && num >=0) {
        return (
            <>
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
            </>
        )
    }
    if (2 > num && num >=1) {
        return (
            <>
                <IoIosStar />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
            </>
        )
    }
    if (3 > num && num >=2) {
        return (
            <>
                <IoIosStar />
                <IoIosStar />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
            </>
        )
    }
    if (4 > num && num >=3) {
        return (
            <>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarOutline />
                <IoIosStarOutline />
            </>
        )
    }
    if (4.5 > num && num >=4) {
        return (
            <>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarOutline />
            </>
        )
    }
    if (num >4.5) {
        return (
            <>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
            </>
        )
    }
}
// export default Stars;
