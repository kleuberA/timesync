"use client"

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar as CalendarIcon, SquareUser } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Agendamento() {

    const [date, setDate] = useState<Date>();
    const [time, setTime] = useState<string>();
    // console.log(date?.toLocaleString(["pt-BR"]));
    console.log(time);
    return (
        <section className="w-[40dvw] min-h-screen flex flex-col justify-around p-5 gap-5 border-r border-r-border">
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold tracking-wider">Agende um atendimento</h1>
                <span className="text-sm">Selecione Data, horário e informe o nome do cliente para criar o agendamento.</span>
            </div>
            <div className="flex flex-col gap-2">
                <Label>Data</Label>
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
            <div>
                <h1 className="text-lg font-bold font-mono">Horários</h1>
                <div className="flex flex-col gap-2">
                    <span className="text-xs">Manhã</span>
                    <div className="flex flex-row gap-3 w-full flex-wrap">
                        {/* <Button variant="outline" onClick={() => setTime("09:00")}>09:00</Button>
                        <Button variant="outline" onClick={() => setTime("10:00")} disabled>10:00</Button>
                        <Button variant="outline" onClick={() => setTime("11:00")}>11:00</Button>
                        <Button variant="outline" onClick={() => setTime("12:00")}>12:00</Button> */}
                        {Array(4).fill(0).map((_, i) => (
                            <Button key={i} variant="outline" onClick={() => setTime(`${i + 9}:00`)}>{i + 9}:00</Button>
                        ))}
                    </div>
                    <span className="text-xs">Tarde</span>
                    <div className="flex flex-row gap-3">
                        <Button variant="outline" onClick={() => setTime("13:00")}>13:00</Button>
                        <Button variant="outline" onClick={() => setTime("14:00")}>14:00</Button>
                        <Button variant="outline" onClick={() => setTime("15:00")}>15:00</Button>
                        <Button variant="outline" onClick={() => setTime("16:00")}>16:00</Button>
                        <Button variant="outline" onClick={() => setTime("17:00")}>17:00</Button>
                        <Button variant="outline" onClick={() => setTime("18:00")}>18:00</Button>
                    </div>
                    <span className="text-xs">Noite</span>
                    <div className="flex flex-row gap-3">
                        <Button variant="outline" onClick={() => setTime("19:00")}>19:00</Button>
                        <Button variant="outline" onClick={() => setTime("20:00")}>20:00</Button>
                        <Button variant="outline" onClick={() => setTime("21:00")}>21:00</Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <span>Cliente</span>
                <div className="relative">
                    <Input placeholder="Nome Cliente" className="pl-8" />
                    <SquareUser width={20} height={20} className="absolute top-[0.65rem] left-2 text-primary" />
                </div>
            </div>
            <div>
                <Button className="w-72 h-12">Agendar</Button>
            </div>
        </section>
    )
}