import React from 'react'
import { AiOutlineCaretLeft } from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";
import { AiOutlineFastBackward } from "react-icons/ai";
import { AiOutlineFastForward } from "react-icons/ai";
export default function Pagination({ pages, setCurrentPage, currentPage }) {

    const ultimo = currentPage[currentPage.length - 1];

    return (
        <div className="paginação">
            {currentPage >= 1 &&
                < button onClick={() => setCurrentPage(currentPage == 1)}><AiOutlineFastBackward /></button>
            }
            {currentPage > 0 &&

                < button onClick={() => setCurrentPage(currentPage - 1)}><AiOutlineCaretLeft /></button>}
            {currentPage < pages - 1 &&
                <button onClick={() => setCurrentPage(currentPage + 1)}><AiOutlineCaretRight /></button>
            }
            {currentPage < pages - 1 &&
                < button onClick={() => setCurrentPage(pages - 1)}><AiOutlineFastForward /></button>}

        </div >
    )
}
