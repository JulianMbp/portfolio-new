'use client';
export default function btnAccion() {
    return (
        <div className="flex gap-1 col-span-2 justify-start items-start">
            <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-red-500">
            </div>
            <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-yellow-500">
            </div>
            <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-green-500">
            </div>
        </div>
    );
}