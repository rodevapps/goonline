type Color = {
    id: number;
    value: string;
    removable: boolean;
};

interface Props {
    colors: Color[],
    filteredColors?: Color[],

    setColors?: (colors: Color[]) => void;
    setFilteredColors?: (filteredColors: Color[]) => void;
}

export type { Color, Props }
