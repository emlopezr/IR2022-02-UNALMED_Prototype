// -------------------- HTML Elements --------------------

// Dynamic Relationships

const balancesRule = document.querySelector('#balancesRule');
const editsRule = document.querySelector('#editsRule');
const editsGraphicElement = document.querySelector('#editsGraphicElement');
const generatesWorkProduct = document.querySelector('#generatesWorkProduct');
const buildsRule = document.querySelector('#buildsRule');
const specifiesSpace = document.querySelector('#specifiesSpace');
const createsEvent = document.querySelector('#createsEvent');
const createsPlot = document.querySelector('#createsPlot');
const describesChallenge = document.querySelector('#describesChallenge');
const definesFlow = document.querySelector('#definesFlow');
const implementsInterface = document.querySelector('#implementsInterface');
const determinesGraphicElement = document.querySelector('#determinesGraphicElement');

// Conditionals and Events

const conditionalRules = document.querySelector('#conditionalRules');
const conditionalInterfaces = document.querySelector('#conditionalInterfaces');
const eventPC = document.querySelector('#event');

// -------------------- Click elements --------------------

let rulesUnlocked = 0;
let interfacesUnlocked = 0;
let workProductUnlocked = 0;

conditionalRules.addEventListener('click', e => {
    if (!conditionalRules.classList.contains('clicked')) {
        conditionalRules.classList.add('clicked');
        rulesUnlocked += 1;
    }

    if (rulesUnlocked == 2) { unlock([specifiesSpace]) }
});

conditionalInterfaces.addEventListener('click', e => {
    if (!conditionalInterfaces.classList.contains('clicked')) {
        conditionalInterfaces.classList.add('clicked');
        interfacesUnlocked += 1;
    }

    if (rulesUnlocked == 2) { unlock([specifiesSpace]) }
});

eventPC.addEventListener('click', e => {
    if (!eventPC.classList.contains('clicked')) {
        eventPC.classList.add('clicked');
        rulesUnlocked += 1;
        interfacesUnlocked += 1;
    }

    if (rulesUnlocked == 2) { unlock([specifiesSpace]) }
    if (interfacesUnlocked == 2) { unlock([determinesGraphicElement]) }
});

specifiesSpace.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the previous condidional and the previous event.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/4.png');
    unlock([createsEvent])
});

createsEvent.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer specifies space" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/5.png');
    unlock([createsPlot])
});

createsPlot.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer creates event" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/6.png');
    unlock([describesChallenge])
});

describesChallenge.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer creates plot" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/7.png');
    unlock([definesFlow])
});

definesFlow.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer describes challenge" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/8.png');
    unlock([buildsRule])
});

buildsRule.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer defines flow" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/9.png');
    unlock([balancesRule])
});

balancesRule.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer builds rule" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/10.png');
    unlock([editsRule])

    if (!balancesRule.classList.contains('clicked')) {
        balancesRule.classList.add('clicked');
        workProductUnlocked += 1;
    }

    if (workProductUnlocked === 2) { unlock([generatesWorkProduct]) }
});

editsRule.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer balances rule" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/12.png');
});

determinesGraphicElement.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the previous condidional and the previous event.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/16.png');
    unlock([implementsInterface])
});

implementsInterface.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer creates grapic element" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/10.png');
    unlock([editsGraphicElement])

    if (!implementsInterface.classList.contains('clicked')) {
        implementsInterface.classList.add('clicked');
        workProductUnlocked += 1;
    }

    if (workProductUnlocked === 2) { unlock([generatesWorkProduct]) }
});

editsGraphicElement.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer implements interface" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/20.png');
});

generatesWorkProduct.addEventListener('click', e => {
    let bloked = checkBlocked(
        e.target,
        'Relation blocked',
        `Using this dynamic relationship is not yet allowed.
        Click the "Game Designer balances rule" relationship
        and the "Game Designer implements interface" relationship to unlock it.`
    )

    if (!bloked) { return }
    showInterface('img/interfaces/7.png');
    unlock([definesFlow])
});

// -------------------- Functions --------------------

function checkBlocked(element, title, message) {
    if (element.classList.contains('blocked')) {
        Swal.fire(title, message, 'error');
        return false;
    }

    return true;
}

function showInterface(imageURL) {
    Swal.fire({
        width: '64em',
        imageUrl: imageURL
    })
}

function unlock(elementList) {
    elementList.forEach(element => {
        element.classList.toggle('blocked');
    });
}