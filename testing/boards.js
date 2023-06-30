const emptyBoard = [
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ]
]

const boardWithPatrolBoatAlongX = [
  ['patrolBoat', 'patrolBoat', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],

]

const boardWithPatrolBoatAlongY = [
  ['patrolBoat', '', '', '', '','', '', '', '', ''],
  ['patrolBoat', '', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],
  ['', '', '', '', '','', '', '', '', ''],

]

const boardWithSubmarineAlongX = [
  [
    'submarine', 'submarine', 'submarine', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ]
]

const boardWithDestroyerAlongX = [
  [
    'destroyer', 'destroyer', 'destroyer', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ],
  [
    '', '', '', '', '',
    '', '', '', '', ''
  ]
]

const boardWithBattleShipAlongX = [
  ['battleship', 'battleship', 'battleship', 'battleship', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
]

const boardWithCarrierAlongX = [['carrier', 'carrier', 'carrier', 'carrier', 'carrier', '', '', '', '', ''],
[
  '', '', '', '', '', '', '', '', '', ''
],
[
  '', '', '', '', '',
  '', '', '', '', ''
],
[
  '', '', '', '', '',
  '', '', '', '', ''
],
[
  '', '', '', '', '',
  '', '', '', '', ''
],
[
  '', '', '', '', '',
  '', '', '', '', ''
],
[
  '', '', '', '', '',
  '', '', '', '', ''
],
[
  '', '', '', '', '',
  '', '', '', '', ''
],
[
  '', '', '', '', '',
  '', '', '', '', ''
],
[
  '', '', '', '', '',
  '', '', '', '', ''
]
]
const boardWithFiveShipsAlongX = [
  ['carrier', 'carrier', 'carrier', 'carrier', 'carrier', '', '', '', '', ''],
  ['battleship', 'battleship', 'battleship', 'battleship', '', '', '', '', '', ''],
  ['destroyer', 'destroyer', 'destroyer', '', '', '', '', '', '', ''],
  ['submarine', 'submarine', 'submarine', '', '', '', '', '', '', ''],
  ['patrolBoat', 'patrolBoat', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
]

const boardWithFiveShipsAlongY = [
  ['carrier', 'battleship', 'destroyer', 'submarine', 'patrolBoat', '', '', '', '', ''],
  ['carrier', 'battleship', 'destroyer', 'submarine', 'patrolBoat', '', '', '', '', ''],
  ['carrier', 'battleship', 'destroyer', 'submarine', '', '', '', '', '', ''],
  ['carrier', 'battleship', '', '', '', '', '', '', '', ''],
  ['carrier', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
]

const boardWithBattleShipAlongXWithOneHit = [
  ['x', 'battleship', 'battleship', 'battleship', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
]

module.exports = { emptyBoard, boardWithPatrolBoatAlongX, boardWithPatrolBoatAlongY, boardWithSubmarineAlongX, boardWithBattleShipAlongX, boardWithDestroyerAlongX, boardWithCarrierAlongX, boardWithFiveShipsAlongX, boardWithFiveShipsAlongY, boardWithBattleShipAlongXWithOneHit }