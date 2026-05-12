"use client"
import { useEffect, useCallback, useState } from 'react';
import { ListOption } from './ListOption';
import { usePathname } from 'next/navigation';

interface Props {
    pages: { id: number, text: string, page: string }[]
}

export const List = ({ pages }: Props) => {
    const pathName = usePathname();
    const [selectedId, setSelectedId] = useState(0);

    const updateHighlighter = useCallback((id: number) => {
        const target = document.getElementById("shoka__" + id.toString());
        const highlight = document.getElementById("highlight");
        const cursor = document.getElementById("cursor");

        if (target && highlight && cursor) {
            const rect = target.getBoundingClientRect();
            const height = target.offsetHeight + "px";
            const transform = `translateY(${rect.top}px)`;

            highlight.style.height = height;
            highlight.style.transform = transform;
            cursor.style.height = height;
            cursor.style.transform = transform;
        }
    }, []);

    useEffect(() => {
        const currentPage = pages.find(p =>
            p.page === "/" ? pathName === "/" : pathName === "/" + p.page
        );

        if (currentPage) {
            setSelectedId(currentPage.id);
            setTimeout(() => updateHighlighter(currentPage.id), 100);
        }
    }, [pathName, pages, updateHighlighter]);

    return (
        <div id="menu">
            <div id="selectionBar">
                <div id="cursor" />
                <div id="highlight" />
            </div>
            <ul className="list-group">
                {pages.map(item => (
                    <div
                        key={item.id}
                        onMouseEnter={() => updateHighlighter(item.id)}
                        onMouseLeave={() => updateHighlighter(selectedId)}
                        onClick={() => setSelectedId(item.id)}
                    >
                        <ListOption item={item} selected={selectedId} />
                    </div>
                ))}
            </ul>
        </div>
    );
}