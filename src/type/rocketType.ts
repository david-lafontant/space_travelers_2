type Rocket = {
    id:               number;
    active:           boolean;
    stages:           number;
    boosters:         number;
    cost_per_launch:  number;
    success_rate_pct: number;
    first_flight:     Date;
    country:          string;
    company:          string;
    height:           Diameter;
    diameter:         Diameter;
    mass:             Mass;
    payload_weights:  PayloadWeight[];
    first_stage:      FirstStage;
    second_stage:     SecondStage;
    engines:          Engines;
    landing_legs:     LandingLegs;
    flickr_images:    string[];
    wikipedia:        string;
    description:      string;
    rocket_id:        string;
    rocket_name:      string;
    rocket_type:      string;
}

export type Diameter = {
    meters: number | null;
    feet:   number | null;
}

export type Engines = {
    number:           number;
    type:             string;
    version:          string;
    layout:           null | string;
    isp:              ISP;
    engine_loss_max:  number | null;
    propellant_1:     string;
    propellant_2:     string;
    thrust_sea_level: Thrust;
    thrust_vacuum:    Thrust;
    thrust_to_weight: number;
}

export type ISP = {
    sea_level: number;
    vacuum:    number;
}

export type Thrust = {
    kN:  number;
    lbf: number;
}

export type FirstStage = {
    reusable:         boolean;
    engines:          number;
    fuel_amount_tons: number;
    burn_time_sec:    number | null;
    thrust_sea_level: Thrust;
    thrust_vacuum:    Thrust;
    cores?:           number;
}

export type LandingLegs = {
    number:   number;
    material: null | string;
}

export type Mass = {
    kg: number;
    lb: number;
}

export type PayloadWeight = {
    id:   string;
    name: string;
    kg:   number;
    lb:   number;
}

export type SecondStage = {
    reusable:         boolean;
    engines:          number;
    fuel_amount_tons: number;
    burn_time_sec:    number | null;
    thrust:           Thrust;
    payloads:         Payloads;
}

export type Payloads = {
    option_1:          string;
    composite_fairing: CompositeFairing;
    option_2?:         string;
}

export type CompositeFairing = {
    height:   Diameter;
    diameter: Diameter;
}
// Type build with QuickType https://app.quicktype.io/#
export default Rocket;