<?php

namespace Konsulting\ActionButtons;

trait ShowAsButton
{
    function showAsButton(): static
    {
        $this->withMeta(['showAsButton' => true]);

        return $this;
    }
}
