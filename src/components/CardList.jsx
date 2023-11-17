function CardList({ birthday, onDelete }) {

    return (
        <div>
            <div className="mt-10">
                {birthday && birthday.map((user) => (
                    <div className="flex justify-between items-center mb-7" key={user.id}>
                        <div className="flex items-center gap-3">
                            <img className="w-[75px] h-[75px] object-cover rounded-full"
                                src={user.image}
                                alt={user.name}
                            />
                            <h3 className="text-2xl">
                                {user.name} <br />
                                <span className="text-base">
                                    {user.age} years
                                </span>
                            </h3>
                        </div>
                        <button onClick={() => onDelete(user.id)} className="px-4 py-1 text-sm text-white bg-black">
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardList