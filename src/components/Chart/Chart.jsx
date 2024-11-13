import React from 'react';

const Chart = () => {
    return (
        <div className='row'>
            <div className="col-xl-8 col-lg-7">
                <div className="card mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Monthly Recap Report</h6>
                        <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Dropdown Header:</div>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="chart-area">
                            <canvas id="myAreaChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-4 col-lg-5">
                <div className="card mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Products Sold</h6>
                        <div className="dropdown no-arrow">
                            <a className="dropdown-toggle btn btn-primary btn-sm" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Month <i className="fas fa-chevron-down"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Select Period</div>
                                <a className="dropdown-item" href="#">Today</a>
                                <a className="dropdown-item" href="#">Week</a>
                                <a className="dropdown-item active" href="#">Month</a>
                                <a className="dropdown-item" href="#">This Year</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <div className="small text-gray-500">Oblong T-Shirt
                                <div className="small float-right"><b>600 of 800 Items</b></div>
                            </div>
                            <div className="progress" style={{ height: '12px' }}>
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '80%' }} aria-valuenow="80"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="small text-gray-500">Gundam 90'Editions
                                <div className="small float-right"><b>500 of 800 Items</b></div>
                            </div>
                            <div className="progress" style={{ height: '12px' }}>
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="small text-gray-500">Rounded Hat
                                <div className="small float-right"><b>455 of 800 Items</b></div>
                            </div>
                            <div className="progress" style={{ height: '12px' }}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '55%' }} aria-valuenow="55"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="small text-gray-500">Indomie Goreng
                                <div className="small float-right"><b>400 of 800 Items</b></div>
                            </div>
                            <div className="progress" style={{ height: '12px' }}>
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="50"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="small text-gray-500">Remote Control Car Racing
                                <div className="small float-right"><b>200 of 800 Items</b></div>
                            </div>
                            <div className="progress" style={{ height: '12px' }}>
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow="30"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <a className="m-0 small text-primary card-link" href="#">View More <i
                            className="fas fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart;
