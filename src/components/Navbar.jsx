

function Navbar() {
    return (
        <div className="flex justify-between p-2 border-b-slate-200 border-2">
            <h1 className="text-4xl font-bold">TodoSync</h1>
            <button className="w-11 h-11 shrink-0 grow-0 rounded-full bg-green-300 text-green-700">TA</button>
        </div>
    );
}

export default Navbar;