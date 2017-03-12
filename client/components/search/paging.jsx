import React from 'react';

// max 5 buttons
const NAV_BUTTON_COUNT = 5;
const BUTTON_COUNT = 2;

class Paging extends React.Component {
    render() {
        const { cp, itemsPerPage, itemCount, changePage } = this.props;

        if (!itemCount) {
            return null;
        }

        const lastPage = Math.ceil(itemCount / itemsPerPage);
        const padding = cp <= BUTTON_COUNT ? 1 : 0;
        let min = Math.max(cp - BUTTON_COUNT, 1);
        let max = Math.min(cp + BUTTON_COUNT + padding, cp + (BUTTON_COUNT * 2));

        if (cp === 1 || lastPage < NAV_BUTTON_COUNT) {
            min = 1;
            max = Math.min(lastPage, NAV_BUTTON_COUNT);
        } else if (cp === lastPage || max > lastPage) {
            min = lastPage - (BUTTON_COUNT * 2);
            max = lastPage;
        }

        const canMoveBackward = cp > 1;
        const canMoveForward = cp < lastPage;

        const pag = [];
        for (let i = min; i <= max; i++) {
            pag.push((
                <li className={`page-item ${i === cp ? 'active' : ''}`}>
                    <button className="page-link" data-value={i} onClick={changePage}>{ i }</button>
                </li>
            ));
        }

        return (
            <nav className="flex-row" aria-label="Search results pagination">
                <ul className="pagination pagination-lg justify-content-center">
                    <li className="page-item">
                        <button className={`page-link ${!canMoveBackward ? 'disabled' : ''}`} aria-label="Previous" data-value={cp - 1} onClick={canMoveBackward ? changePage : null}>
                            <span aria-hidden="true" data-value={cp - 1} >&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </button>
                    </li>
                    {
                      pag.map(btn => btn)
                  }
                    <li className="page-item">
                        <button className={`page-link ${!canMoveForward ? 'disabled' : ''}`} aria-label="Next" data-value={cp + 1} onClick={canMoveForward ? changePage : null}>
                            <span aria-hidden="true" data-value={cp + 1}>&raquo;</span>
                            <span className="sr-only">Next</span>
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

Paging.propTypes = {
    cp: React.PropTypes.number.isRequired,
    itemCount: React.PropTypes.number.isRequired,
    itemsPerPage: React.PropTypes.number.isRequired,
    changePage: React.PropTypes.func.isRequired,
};

export default Paging;
