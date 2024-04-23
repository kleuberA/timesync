"use client"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon, CloudSun, MoonStar, Sun } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Agenda() {

    const [date, setDate] = useState<Date>();

    return (
        <section className="w-full p-5 flex flex-col gap-5">
            <div className="flex flex-row items-center w-full justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold">Sua Agenda</h1>
                    <p className="text-gray-500">Consulte seus cortes de cabelo agendados por dia.</p>
                </div>
                <div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[280px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                                {date ? format(
                                    date,
                                    "dd/MM/yyyy",
                                ) : <span>Escolha uma data</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div className="flex w-full flex-col gap-5 rounded-md border border-border min-h-32">
                <div className="w-full border-b border-b-border p-2 flex flex-row justify-between">
                    <div className="flex flex-row gap-3 items-center">
                        <Sun className="text-yellow-300" />
                        <span className="text-xs">Manhã</span>
                    </div>
                    <div>
                        <span className="text-xs">09h-12h</span>
                    </div>
                </div>
                <div className="flex flex-col gap-3 p-2">
                    <div className="flex flex-row gap-3">
                        <span className="font-bold text-sm">11:00</span>
                        <span className="text-sm font-medium">Kleuber Silva</span>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col gap-5 rounded-md border border-border min-h-32">
                <div className="w-full border-b border-b-border p-2 flex flex-row justify-between">
                    <div className="flex flex-row gap-3 items-center">
                        <CloudSun className="text-yellow-300" />
                        <span className="text-xs">Tarde</span>
                    </div>
                    <div>
                        <span className="text-xs">13h-18h</span>
                    </div>
                </div>
                <div className="flex flex-col gap-3 p-2">
                    <div className="flex flex-row gap-3">
                        <span className="font-bold text-sm">13:00</span>
                        <span className="text-sm font-medium">Kleuber Silva</span>
                    </div>
                    <div className="flex flex-row gap-3">
                        <span className="font-bold text-sm">14:00</span>
                        <span className="text-sm font-medium">Kleuber Silva</span>
                    </div>
                    <div className="flex flex-row gap-3">
                        <span className="font-bold text-sm">16:00</span>
                        <span className="text-sm font-medium">Kleuber Silva</span>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col gap-5 rounded-md border border-border min-h-32">
                <div className="w-full border-b border-b-border p-2 flex flex-row justify-between">
                    <div className="flex flex-row gap-3 items-center">
                        <MoonStar className="text-yellow-300" />
                        <span className="text-xs">Noite</span>
                    </div>
                    <div>
                        <span className="text-xs">19h-21h</span>
                    </div>
                </div>
                <div className="flex flex-col gap-3 p-2">
                    <div className="flex flex-row gap-3">
                        <span className="font-bold text-sm">21:00</span>
                        <span className="text-sm font-medium">Kleuber Silva</span>
                    </div>
                </div>
            </div>
        </section>
    )
}