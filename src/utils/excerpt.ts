const excerpt = (value: string, end: number): string => `${value.slice(0, end).trim()}...`;

export default excerpt;
