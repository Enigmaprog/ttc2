export interface ServerOptions {
    value: { ram: number; cpu: number; ip: number; storage: number };
    label: string;
    color: string;
}
  
export const basicOptions: ServerOptions[] = [
    {
        value: { ram: 1, cpu: 1, ip: 1, storage: 15 },
        label: "Cloud 1",
        color: "#0052CC",
    },
    {
        value: { ram: 2, cpu: 1, ip: 1, storage: 30 },
        label: "Cloud 2",
        color: "#5243AA",
    },
    {
        value: { ram: 4, cpu: 2, ip: 1, storage: 60 },
        label: "Cloud 3",
        color: "#5243AA",
    },
    {
        value: { ram: 8, cpu: 4, ip: 1, storage: 120 },
        label: "Cloud 4",
        color: "#5243AA",
    },
    {
        value: { ram: 32, cpu: 16, ip: 1, storage: 200 },
        label: "Cloud Mega",
        color: "#5243AA",
    },
];

export const generalOptions = [
    {
        value: { ram: 8, cpu: 2, ip: 1, storage: 15 },
        label: "General 1",
        color: "#00B8D9",
    },
    {
        value: { ram: 16, cpu: 4, ip: 1, storage: 30 },
        label: "General 2",
        color: "#0052CC",
    },
    {
        value: { ram: 24, cpu: 6, ip: 1, storage: 60 },
        label: "General 3",
        color: "#5243AA",
    },
    {
        value: { ram: 32, cpu: 8, ip: 1, storage: 120 },
        label: "General 4",
        color: "#5243AA",
    },
    {
        value: { ram: 48, cpu: 16, ip: 1, storage: 200 },
        label: "General 5",
        color: "#5243AA",
    },
];

export const cpuOptions = [
    {
        value: { ram: 2, cpu: 2, ip: 1, storage: 15 },
        label: "Compute 1",
        color: "#00B8D9",
    },
    {
        value: { ram: 4, cpu: 4, ip: 1, storage: 30 },
        label: "Compute 2",
        color: "#0052CC",
    },
    {
        value: { ram: 8, cpu: 8, ip: 1, storage: 60 },
        label: "Compute 3",
        color: "#5243AA",
    },
    {
        value: { ram: 16, cpu: 16, ip: 1, storage: 120 },
        label: "Compute 4",
        color: "#5243AA",
    },
];

export const ramOptions = [
    {
        value: { ram: 16, cpu: 2, ip: 1, storage: 15 },
        label: "Memory 1",
        color: "#00B8D9",
    },
    {
        value: { ram: 32, cpu: 4, ip: 1, storage: 30 },
        label: "Memory 2",
        color: "#0052CC",
    },
    {
        value: { ram: 64, cpu: 8, ip: 1, storage: 60 },
        label: "Memory 3",
        color: "#5243AA",
    },
    {
        value: { ram: 64, cpu: 16, ip: 1, storage: 120 },
        label: "Memory 4",
        color: "#5243AA",
    },
];

export const volume = [
    { value: 300, label: "HDD", color: "#0052CC" },
    { value: 800, label: "SSD", color: "#00B8D9" },
];

export const groupedOptions = [
    {
        label: "Basic",
        options: basicOptions,
    },
    {
        label: "General",
        options: generalOptions,
    },
    {
        label: "Compute",
        options: cpuOptions,
    },
    {
        label: "Memory",
        options: ramOptions,
    },
];

export const customerOptions2 = [
    {
        value: { name: "Eclinic" },
        label: "Eclinic",
        color: "#00B8D9",
    },
    {
        value: { name: "Eschool" },
        label: "Eschool",
        color: "#0052CC",
    },
    {
        value: { name: "Lambda" },
        label: "Lambda",
        color: "#5243AA",
    },
    {
        value: { name: "IMap" },
        label: "IMap",
        color: "#5243AA",
    },
    {
        value: { name: "BBX" },
        label: "BBX",
        color: "#5243AA",
    },
    {
        value: { name: "Meeting" },
        label: "Meeting",
        color: "#5243AA",
    },
    {
        value: { name: "Sharing" },
        label: "Sharing",
        color: "#5243AA",
    },
    {
        value: { name: "Object storage" },
        label: "Object storage",
        color: "#5243AA",
    },
];

export const customersOptions = [
    {
        label: "Basic",
        options: customerOptions2,
    },
];

export const pricing = {
    ip: 5000,
    ipStep: 30000,
    hdd: 300,
    ssd: 800,
    cpu: 12000,
    snapshot: 5000,
    backup: 300,
    ram: 12000,
};