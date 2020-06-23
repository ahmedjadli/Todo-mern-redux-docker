import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Footer from "../TodoFooter";
import VisibleTodoList from "../../containers/VisibleTodoList";

const MainSection = ({ todosCount, completedCount, actions }) => {
  useEffect(() => {
    actions.fetchTodos();
  }, [actions]);

  return (
    <section className="main">
      {!!todosCount && (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={actions.completeAllTodos} />
        </span>
      )}
      <VisibleTodoList />
      {!!todosCount && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={actions.clearCompleted}
        />
      )}
    </section>
  );
};

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

export default MainSection;
