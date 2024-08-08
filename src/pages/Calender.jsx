import React, { useState, useEffect } from "react";

const Calendar = () => {
  const [todos, setTodos] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    fetchTodos();
  }, [currentDate]);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/myTodos");
      const data = await response.json();
      console.log("Fetched todos:", data);
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

  const renderDays = () => {
    const days = [];
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
    const totalDays = daysInMonth(
      currentDate.getMonth() + 1,
      currentDate.getFullYear()
    );

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="bg-gray-50 px-3 py-2 text-gray-500"
        ></div>
      );
    }

    for (let i = 1; i <= totalDays; i++) {
      const isToday =
        i === currentDate.getDate() &&
        currentDate.getMonth() === new Date().getMonth() &&
        currentDate.getFullYear() === new Date().getFullYear();
      days.push(
        <div
          key={i}
          className={`relative bg-white px-3 py-2 ${
            isToday ? "font-semibold" : ""
          }`}
        >
          <time
            dateTime={`${currentDate.getFullYear()}-${
              currentDate.getMonth() + 1
            }-${i}`}
          >
            {i}
          </time>
          <ol className="mt-2">
            {todos
              .filter((todo) => {
                const todoDate = new Date(todo.creationDate);
                return (
                  todoDate.getDate() === i &&
                  todoDate.getMonth() === currentDate.getMonth() &&
                  todoDate.getFullYear() === currentDate.getFullYear()
                );
              })
              .map((todo) => (
                <li key={todo.id}>
                  <a href="#" className="group flex">
                    <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                      {todo.title}
                    </p>
                    <time
                      dateTime={todo.creationDate}
                      className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                    >
                      {new Date(todo.creationDate).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </time>
                  </a>
                </li>
              ))}
          </ol>
        </div>
      );
    }
    return days;
  };

  return (
    <div className="lg:flex lg:h-full lg:flex-col">
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          <time
            dateTime={`${currentDate.getFullYear()}-${
              currentDate.getMonth() + 1
            }`}
          >
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </time>
        </h1>
        <div className="flex items-center">
          <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Previous month</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              type="button"
              className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
            >
              Today
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden"></span>
            <button
              type="button"
              onClick={handleNextMonth}
              className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Next month</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          <div className="flex justify-center bg-white py-2">
            <span>M</span>
            <span className="sr-only sm:not-sr-only">on</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>T</span>
            <span className="sr-only sm:not-sr-only">ue</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>W</span>
            <span className="sr-only sm:not-sr-only">ed</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>T</span>
            <span className="sr-only sm:not-sr-only">hu</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>F</span>
            <span className="sr-only sm:not-sr-only">ri</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>S</span>
            <span className="sr-only sm:not-sr-only">at</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>S</span>
            <span className="sr-only sm:not-sr-only">un</span>
          </div>
        </div>
        <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
          <div className="grid w-full grid-cols-7 gap-px">{renderDays()}</div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
