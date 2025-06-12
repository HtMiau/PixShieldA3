import { useState, useRef } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { toast } from 'sonner';

export default function Transferencia() {
    const [conta, setConta] = useState("");
    const [valor, setValor] = useState("");
    const [loading, setLoading] = useState(false);

    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".animate-in-child", {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1,
        });
    }, { scope: container });

    const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/\D/g, '');
        if (!rawValue) {
            setValor('');
            return;
        }
        const numericValue = parseInt(rawValue, 10) / 100;
        const formattedValue = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(numericValue).replace('R$', '').trim();

        setValor(formattedValue);
    };

    const enviar = (e: React.FormEvent) => {
        e.preventDefault();
        const valorNumerico = parseFloat(valor.replace(/\./g, '').replace(',', '.'));

        if (!conta || !valor || valorNumerico <= 0) {
            toast.error("Erro de validação", {
                description: "Por favor, preencha a conta de destino e um valor válido.",
            });
            return;
        }

        setLoading(true);
        const toastId = toast.loading("Processando transferência...");

        setTimeout(() => {
            setLoading(false);
            toast.success("Transferência realizada!", {
                id: toastId,
                description: `R$ ${valor} enviados para a conta ${conta}.`,
            });
            setConta("");
            setValor("");
        }, 1500);
    };

    return (
        <section ref={container} className="mx-auto max-w-lg space-y-6">
            <div className="animate-in-child text-center">
                <h1 className="text-3xl font-bold text-gray-800">Transferência</h1>
                <p className="text-muted-foreground mt-1">Envie dinheiro para outra conta Bradesco.</p>
            </div>

            <form onSubmit={enviar} className="animate-in-child space-y-6 rounded-xl bg-white p-8 shadow-lg border">
                <div className="space-y-2">
                    <Label htmlFor="conta" className="text-base">Conta destino</Label>
                    <Input
                        id="conta"
                        value={conta}
                        onChange={e => setConta(e.target.value)}
                        placeholder="Número da conta com dígito"
                        className="h-12 text-lg"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="valor" className="text-base">Valor (R$)</Label>
                    <Input
                        id="valor"
                        type="text"
                        value={valor}
                        onChange={handleValorChange}
                        placeholder="0,00"
                        className="h-12 text-lg"
                    />
                </div>

                <Button type="submit" size="lg" className="w-full h-12 text-lg" disabled={loading}>
                    {loading ? "Enviando..." : "Transferir"}
                </Button>
            </form>
        </section>
    );
}